export default async function Page({ params }: { params: { job_id: string } }) {

    
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let posts = await data.json()

    return <div>My Post: {params.job_id} = {JSON.stringify(posts)}</div>
}