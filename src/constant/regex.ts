export const REG_EMAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

// Using +62 as prefix is required
export const REG_PHONE =
  /^(\+62)?[\s-]?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;
