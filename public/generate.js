function generate() {
  const namespace_id = [...crypto.getRandomValues(new Uint8Array(8))]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');

  const message = [...crypto.getRandomValues(new Uint8Array(Math.floor(Math.random() * 100)))]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');

  document.getElementById('namespace_id').value = namespace_id;
  document.getElementById('message').value = message;
}
