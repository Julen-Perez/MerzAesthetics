import { LightningElement,api } from 'lwc';

export default class LearningHomeChild extends LightningElement {

    @api heading = "Default Heading";
    @api cloud_detail = "Default Cloud Details";
    @api url = "Default URL";
    @api link_in_new_tab = "false";



}