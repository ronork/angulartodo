import {Pipe} from 'angular2/core';




@Pipe({
    name:'search'
})
export class SearchPipe {



    transform(value,[term]) {
        var regex = new RegExp(term,'i');
        return value.filter((item)=> {
            return regex.test(item.title);
        });
    }
}