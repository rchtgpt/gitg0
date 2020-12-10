import figlet from 'figlet'

const logLogo = () => {
    console.log(
        figlet.textSync('Gitg0', {
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }),
        "\n"
    )
}

export default logLogo
