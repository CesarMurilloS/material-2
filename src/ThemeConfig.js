import {createMuiTheme} from '@material-ui/core/styles'
import {amber, indigo} from '@material-ui/core/colors'

const theme =  createMuiTheme({
    palette:{
        secondary:{
            main: amber[800]
        },
        primary:{
            main: '#121858'
        },
    }
})

export default theme;