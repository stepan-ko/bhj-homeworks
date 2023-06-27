
const progressBar = document.getElementById('progress');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest;

    xhr.upload.onprogress = (e) => {
        progressBar.value = (e.loaded / e.total).toFixed(2);
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
})


