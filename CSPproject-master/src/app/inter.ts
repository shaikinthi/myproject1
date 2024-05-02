export interface inter {
    id:string;
    name:string;
    hand_washing:string;
    using_soap:string;
    brushing:string;
    clean_surroundings:string;
    
  
  
  
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
      Result: [];
    }