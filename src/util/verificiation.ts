export const emailExists = async (email: string, link: string) => {
  const emailFetch = await fetch(`${link}/search?email=${email}`);
  const isEmail = await emailFetch.json();
  if (isEmail.length > 0) {
    return 'email already exists';
  }
};


export const refrenceExists = async (refNo: string, link:string) => {
  const reference = await fetch(`${link}/search?refrence_number=${refNo}`);
  const isRef = await reference.json();
  if(isRef.length > 0) {
    return true
  }else {
    return false
  }
}

export function validateEmail(mail: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
