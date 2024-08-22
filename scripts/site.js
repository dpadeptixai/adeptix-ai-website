function sendEmail() {
    // Get the form data
    const form = document.getElementById('emailForm');
    const subject = encodeURIComponent(form.subject.value).replace(/\+/g, '%20');
    const body = encodeURIComponent(form.body.value).replace(/\+/g, '%20').replace(/%0A/g, '%0D%0A');

    // Construct the mailto URL
    const mailtoLink = `mailto:info@abc.com?subject=${subject}&body=${body}`;

    // Open the email client with the mailto link
    window.location.href = mailtoLink;
}