import { useRouteError } from 'react-router-dom';

const Error = () =>{

    const useRouteErrorObj = useRouteError();

    //destructing useRouteErrorObj

    const{status,statusText} = useRouteErrorObj;
    // console.log(useRouteError());

    return(
        
        <>
        <h1>OOPS!</h1>
        <h1>{status}</h1>
        <h4>{statusText}</h4>
        </>
    );
}

export default Error;