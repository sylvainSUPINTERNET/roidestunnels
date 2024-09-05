export default function Page({ params }: { params: { job_id: string } }) {
    return <div>My Post: {params.job_id}</div>
}