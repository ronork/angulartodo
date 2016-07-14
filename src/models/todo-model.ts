export class TodoModel {


    toggle():void{
        this.status =
            this.status == 'Started'
            ? 'Completed'
            : 'Started';
    }

    constructor(
        public title:string = '',
        public status:string = 'Started'){}
}