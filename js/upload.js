document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const thumbs = document.getElementById('thumbs');
  const downloadAll = document.getElementById('downloadAll');
  const clearAll = document.getElementById('clearAll');

  let filesList = [];

  function render() {
    thumbs.innerHTML = '';
    filesList.forEach((file, idx) => {
      const url = URL.createObjectURL(file);
      const div = document.createElement('div');
      div.className = 'thumb';

      const img = document.createElement('img');
      img.src = url;
      img.alt = file.name;

      const p = document.createElement('p');
      p.textContent = file.name;

      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.textContent = 'Download';
      a.style.display = 'block';
      a.style.marginTop = '6px';
      a.className = 'btn';

      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(a);
      thumbs.appendChild(div);
    });
  }

  fileInput.addEventListener('change', (e) => {
    const list = Array.from(e.target.files || []);
    if (list.length) {
      filesList = filesList.concat(list);
      render();
    }
  });

  downloadAll.addEventListener('click', () => {
    if (!filesList.length) return alert('No files selected');
    filesList.forEach(file => {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  });

  clearAll.addEventListener('click', () => {
    filesList = [];
    fileInput.value = '';
    render();
  });

});
