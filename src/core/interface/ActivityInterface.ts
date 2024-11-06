
export type ActivityType = {
    id:number;
    ContactType:string;
    ContactDate:Date;
    Client: {
      name: string;
    }[];
    ContactUser:string;
    Description:string;
  };

  export interface ActivityFormType  {
    ContactType:string;
    ContactDate:Date;
    Client: {
      name: string;
    }[];
    ContactUser:string;
    Description:string;
  };
  
export interface TypeContactProps {
    id: number;
    name: string;
  }

export interface ActivityFormProps{
    setclose:()=>void;
    }

export  interface WindowDialogueProps {
        open: boolean;
        setclose: () => void;
      }

export interface WindowDeleteProps{
    open: boolean;
    setclose: () => void;
    activity:ActivityType;
}