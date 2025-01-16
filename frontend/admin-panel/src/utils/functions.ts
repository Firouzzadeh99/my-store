import moment from "jalali-moment"
export function convertToJalali(value: string = ""){
    if(!value) return ""
    return moment(value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
}