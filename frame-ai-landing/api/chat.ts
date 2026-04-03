export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { toolId, input } = req.body;

  if (!toolId || !input) {
    return res.status(400).json({ error: 'Missing toolId or input' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error('GROQ_API_KEY not set');
    return res.status(500).json({ error: 'Server configuration error - API key missing' });
  }

  // Define prompts based on toolId
  const prompts: Record<string, string> = {
    'roteiro': 'Generate a detailed screenplay script in Portuguese based on the following description. Include scene headings, action lines, character names, and dialogue. Make it professional and cinematic.',
    '01': 'Generate a screenplay script based on: ',
    'callsheet': 'Create a professional call sheet for a film production based on the following project description. Include date, call time, locations, cast, crew, and schedule.',
    '02': 'Create a call sheet for: ',
    'decupagem': 'Generate a shot list (decupagem) for the following scene description. Include shot numbers, shot types, camera angles, lens information, and brief descriptions.',
    '03': 'Create a shot list for: ',
    'orcamento': 'Estimate a production budget for the following project description. Break down costs by categories like crew, equipment, locations, post-production, etc. Provide realistic estimates in Brazilian Real (BRL).',
    '04': 'Estimate budget for: ',
    'proposta': 'Write a professional commercial proposal for the following project. Include objectives, scope, deliverables, timeline, and pricing.',
    '05': 'Create a proposal for: ',
    'relatorio': 'Generate a production wrap report for the following project. Include project status, key accomplishments, issues encountered, and next steps.',
    '06': 'Create a wrap report for: ',
  };

  const promptKey = prompts[toolId] || 'Generate content for: ';
  const fullPrompt = `${promptKey} ${input}`;

  try {
    console.log(`Processing request for toolId: ${toolId}`);
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { role: 'user', content: fullPrompt }
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', response.status, errorText);
      return res.status(500).json({ 
        error: 'AI service error',
        details: `Groq API returned ${response.status}`
      });
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      console.error('No content in response:', data);
      return res.status(500).json({ error: 'No response from AI' });
    }

    res.status(200).json({ content });
  } catch (error: any) {
    console.error('Error calling Groq:', error.message);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message
    });
  }
}