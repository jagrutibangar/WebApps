import React from 'react'

export default function BookTable() {
  return (

<div>
<div className="card" style={{width:400,marginLeft:100,marginTop:100,outlineColor:"golden",borderRadius:40,borderTopRightRadius:40,borderTopLeftRadius:40}}>
<img src="https://images.unsplash.com/photo-1599458252573-56ae36120de1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMHRhYmxlfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title" >Book A Table</h5>
<p className="card-text" >Book your table online for a perfect Dine!</p>
<a href="/" className="btn btn-primary" style={ {backgroundColor:'brown', borderRadius:400,borderTopLeftRadius:400,borderTopRightRadius:400,borderBottomRightRadius:400}}>Book Now</a>

</div>
</div>
</div>

  )
}
