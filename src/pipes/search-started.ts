import {Pipe} from 'angular2/core';

@Pipe({
    name:'started'
})
export class SearchStarted {
    transform(value, [status]){
        return value.filter((item)=>{ return item.status == status });
    }
}