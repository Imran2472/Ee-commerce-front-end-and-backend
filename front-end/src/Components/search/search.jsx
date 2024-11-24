import React from 'react'

function search() {
  return (
  <>
  <dialog id="my_modal_3" className="modal p-0">
  <div className="modal-box pt-[2.4rem] px-[1rem] pb-[1rem]">
    <form method="dialog">
      <p className='py-2 text-base text-center'>Enter SomeThing To Search Here</p>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <input type="search" className='w-[100%] px-4 py-2 border card' placeholder='search here ...'/>
    </form>
  </div>
</dialog>
  </>
  )
}

export default search
