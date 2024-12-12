// netlify/functions/submit-story.js

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Solo richieste POST sono permesse' }),
      };
    }
  
    const { name, email, story } = JSON.parse(event.body);
  
    // Logica per processare la storia: ad esempio, inviarla via email, salvarla in un database, ecc.
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Storia: ${story}`);
  
    // Risposta di successo
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Storia ricevuta con successo!' }),
    };
  };
  