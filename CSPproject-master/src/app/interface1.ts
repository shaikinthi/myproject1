export interface interface1{
    username:string;
    password:string;
    
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    Result: any;
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
     Result:[];
}