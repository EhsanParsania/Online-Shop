


 export const convertDateToPersian = (epoch) => {
    const date = new Date(+epoch)
    const persianDate = date.toLocaleString('fa-IR')
    return persianDate
  }