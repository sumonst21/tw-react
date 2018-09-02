const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Thanks for reaching out!</h3>
          <p>I look forward to chatting with you about your project.</p>
          <p>${survey.body}</p>
        </div>
      </body>
    </html>
  `;
};