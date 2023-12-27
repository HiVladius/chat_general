import moment from 'moment'

export const timeMonth = (fecha) => {
    const hoy = moment(fecha)

    return hoy.format('MMMM Do YYYY, h:mm:ss a');
}