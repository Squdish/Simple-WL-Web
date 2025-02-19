const webhookURL = ''; // Your discord webhook

const form = document.getElementById('whitelistForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();


    const formData = {
        discord: document.getElementById('discord').value,
        age: document.getElementById('age').value,
        steam: document.getElementById('steam').value,
        howYouKnow: document.getElementById('howyouknow').value,
        characterStory: document.getElementById('character-story').value,
        infoTransfer: document.getElementById('info-transfer').value,
        decencyRespect: document.getElementById('decency-respect').value,
    };

    const payload = {
        content: `**New Whitelist Application**\n
        **Discord:** ${formData.discord}\n
        **Age:** ${formData.age}\n
        **Steam:** ${formData.steam}\n
        **How you know about us?:** ${formData.howYouKnow}\n
        **Character Story Line:** ${formData.characterStory}\n
        **Information Transfer:** ${formData.infoTransfer}\n
        **Decency/Respect:** ${formData.decencyRespect}`,
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            alert('Application submitted successfully!');
            form.reset();
        } else {
            alert('Failed to submit the application. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
    }
});
