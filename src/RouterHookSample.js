import useReactRouter from 'use-react-router'

function RouteHookSample() {
    const {history, location, match} = useReactRouter();
    console.log({history, location, match});
    return null;
}

export default RouteHookSample;