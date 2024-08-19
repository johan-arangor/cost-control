const renewPasswordHtml = (link) => {
    return(
        `
            <div>
                <button hreft="${link}">Recupera tu contraseña</button>
            </div>
        `
    );
}

module.exports = renewPasswordHtml;