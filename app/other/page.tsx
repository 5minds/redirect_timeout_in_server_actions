export default async function Page() {

    
    await new Promise(resolve => setTimeout(resolve, 10000));

    return <div>Finished</div>;
}

