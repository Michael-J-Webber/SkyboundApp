import {Success} from '../models/success.class';
import {Contents} from '../models/contents.class';
import {Copyright} from '../models/copyright.class';
export class Qodhelper {
    public success: Success;
    public contents: Contents;
    public baseurl: string;
    public copyright: Copyright;  
      
    constructor(success: Success, contents: Contents, baseurl: string, copyright: Copyright){
      this.success = success;
      this.contents = contents;
      this.baseurl = baseurl;
      this.copyright = copyright;
    }
}