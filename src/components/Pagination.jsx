/**
 * @Author Sneha T
 * 
 */
export default function Pagination({ page, setPage, total }) {

  return (

    <div className="pagination">

      <button
        disabled={page <= 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
      >

        Prev

      </button>

      <span>{page}</span>

      <button

        disabled={page >= total}
        onClick={() => setPage((p) => Math.min(total, p + 1))}
      >

        Next

      </button>

    </div>
  );
}
