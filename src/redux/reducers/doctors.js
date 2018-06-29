// src/redux/reducers/doctors.js
const initialState = {
    doctors: [],
    doctor: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_DOCTORS' :
        return {
            ...state,
            doctors: action.doctors
        }
        case 'VIEW_DOCTOR':
        return {
            ...state,
            doctor: action.doctor
        }
        case 'CLAP_DOCTOR':
        let doctor = Object.assign({}, state.doctor)
        doctor.claps++
        console.log(doctor)
        return {
            ...state,
            doctor: doctor
        }
        default:
            return state
    }
}