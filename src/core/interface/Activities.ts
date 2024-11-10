
export interface HeaderProps{
    id:number;
    name:string
}

export type ActivityType = {
    id:number;
    ContactType:string;
    ContactDate:Date;
    Client: {
      name: string;
    }[];
    ContactUser:string;
    Description:string;
    nombreNegocio:string;
  };

  export type ActivityFormType = {
    ContactType:string;
    ContactDate:Date;
    Client: {
      name: string;
    }[];
    ContactUser:string;
    Description:string;
  };