function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase =
      document.getElementById("includeUppercase").checked;
    const includeNumbers =
      document.getElementById("includeNumbers").checked;
    const includeSpecialChars = document.getElementById(
      "includeSpecialChars"
    ).checked;

    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_+{}[]|:;<>,.?/-=_+";

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    document.getElementById("generated-password").innerText = password;
  }

  function copyToClipboard() {
    const passwordText = document.getElementById("generated-password");
    const textarea = document.createElement("textarea");
    textarea.value = passwordText.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }