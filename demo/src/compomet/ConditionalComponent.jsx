import Code from "./Code";
import Welcome from "./Welcome";


export default function ConditionalConponent(){
    const display = true;
    if(display){
        return <Code></Code>
    }
    else{
        return <Welcome></Welcome>
    }
}