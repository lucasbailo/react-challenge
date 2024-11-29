## Welcome to a Front-End Challenge 👋

# Casa das Plantas

## Test the project yourself: [Test the project here!!!](https://react-challenge-red.vercel.app/)

### Full Page

<img src="./src/assets/gifs/1129.gif" alt="Full Page" width="70%">

## Add your email

<img src="./src/assets/gifs/gif2.gif" alt="Receive an email" width="70%">

## Some code that I'm proud of
```js
const sendEmail = (e) => {
    e.preventDefault()

    if(invalidEmail !== "" || emptyEmail !== "" ) {
        return;
    } else {
        setAllRight("Email de contato enviado!")
    }
    alert("Email enviado com sucesso!")

    emailjs.sendForm('######', '########', e.target, '############')
    .then((response) => {
        console.log('Email enviado', response.status, response.text)
        setEmail('')
        setInvalidEmail('')
        setAllRight('')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, (err) => {
        console.log("ERRO: ", err)
    })
}
```

## Built with

- `React Vite`
- [`Ant Design`](https://www.npmjs.com/package/antd)

## You Can
- See the products;
- Check if the email is valid;
- Receive an automatic email.

## Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)