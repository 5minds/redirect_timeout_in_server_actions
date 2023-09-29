export default async function Page() {


    console.log("Other page")
    
    await new Promise(resolve => setTimeout(resolve, 600000));

    return <div>Finished</div>;
}

