import React from 'react'

function AllCategoriesComponent() {
    return (
        <div>
            <div class="container-fluid position-relative" style={{zIndex: "99999"}}>
	<div class="row">
		<div class="col-md-12 shadow-sm">
			<div class="container">
				<div class="row mb-4">
					<div class="col-md-8">
						<ul class="nav">
							<li class="nav-item">
								<a class="nav-link" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Company Profile</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Contact us</a>
							</li>
						</ul>
					</div>
					<div class="col-md-1">
						<ul class="nav">
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
									<i class="fas fa-globe"></i>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#">English</a>
									<a class="dropdown-item" href="#">Türkçe</a>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-md-1">
						<ul class="nav">
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
									<i class="fas fa-coins"></i>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#">Dollar</a>
									<a class="dropdown-item" href="#">Euro</a>
									<a class="dropdown-item" href="#">Türk Lirası</a>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-md-2">
						<ul class="nav">
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
									<i class="fas fa-user"></i>
									<span>Membership</span>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#">Sign In</a>
									<a class="dropdown-item" href="#">Sign up</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="row mb-4">
					<div class="col-md-2">
				  <a href="#"><img src="" class="img-thumbnail p-0 border-0" /></a>
				</div>
					<div class="col-md-6">
						<div class="input-group input-group-lg">
							<input type="text" id="" name="" class="form-control" placeholder="What search?" />
							<select class="form-control form-control-lg rounded-0">
								<option>Categories</option>
								<option>Electronics</option>
								<option>Decoration</option>
								<option>Computers</option>
								<option>Sports</option>
							</select>
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
							</div>
						</div>
					</div>
					<div class="col-md-1">
						<button class="btn btn-outline-secondary btn-block btn-lg" type="button">
							<i class="fas fa-sync-alt"></i>
						</button>
					</div>
					<div class="col-md-1">
						<button class="btn btn-outline-secondary btn-block btn-lg" type="button">
							<i class="fas fa-heart"></i>
						</button>
					</div>
					<div class="col-md-2">
						<div class="dropdown">
							<button class="btn btn-outline-secondary btn-block btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-shopping-bag"></i>
								<span>Cart</span>
							</button>
							<div class="dropdown-menu dropdown-menu-right p-3" style={{width:"500px"}}>
								<table class="table table-sm table-striped table-bordered m-0">
									<tbody>
										<tr>
											<td class="text-center">
												<img src="https://via.placeholder.com/30x30" class="img-thumbnail p-0" alt="" />
											</td>
											<td class="text-left">
												<p class="m-0">
													<a href="#">
														<i class="fas fa-times"></i>
													</a>
													<span>iPhone 11 Plus</span>
												</p>
											</td>
											<td class="text-center">1x</td>
											<td class="text-right">$123.20</td>
										</tr>
										<tr>
											<td class="text-center">
												<img src="https://via.placeholder.com/30x30" class="img-thumbnail p-0" alt="" />
											</td>
											<td class="text-left">
												<p class="m-0">
													<a href="#">
														<i class="fas fa-times"></i>
													</a>
													<span>iPhone 11 Plus</span>
												</p>
											</td>
											<td class="text-center">1x</td>
											<td class="text-right">$123.20</td>
										</tr>
										<tr>
											<td class="text-center">
												<img src="https://via.placeholder.com/30x30" class="img-thumbnail p-0" alt="" />
											</td>
											<td class="text-left">
												<p class="m-0">
													<a href="#">
														<i class="fas fa-times"></i>
													</a>
													<span>iPhone 11 Plus</span>
												</p>
											</td>
											<td class="text-center">1x</td>
											<td class="text-right">$123.20</td>
										</tr>
										<tr>
											<td class="text-right" colspan="3">Sub-Total</td>
											<td class="text-right">$601.00</td>
										</tr>
										<tr>
											<td class="text-right" colspan="3">Eco Tax (-2.00)</td>
											<td class="text-right">$4.00</td>
										</tr>
										<tr>
											<td class="text-right" colspan="3">VAT (20%)</td>
											<td class="text-right">$120.20</td>
										</tr>
										<tr>
											<td class="text-right" colspan="3">Total</td>
											<td class="text-right">$725.20</td>
										</tr>
										<tr>
											<td class="text-right" colspan="4">
												<a class="btn btn-secondary" href="#" role="button">
													<i class="fas fa-shopping-cart"></i>
													<span>View Cart</span>
												</a>
												<a class="btn btn-primary" href="#" role="button">
													<i class="fas fa-share"></i>
													<span>Checkout</span>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<nav class="navbar navbar-expand-lg navbar-light bg-white">
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarSupportedContent">
								<ul class="navbar-nav mr-auto">
									<li class="nav-item active">
										<a class="nav-link" href="#">Electronics, Computers</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Clothing, Jewelry</a>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home, Living</a>
										<div class="dropdown-menu">
											<a class="dropdown-item" href="#">Decoration</a>
											<a class="dropdown-item" href="#">Furniture</a>
											<a class="dropdown-item" href="#">Textile</a>
											<a class="dropdown-item" href="#">Lighting</a>
											<a class="dropdown-item" href="#">Kitchenware</a>
										</div>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Stationery, Office</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Auto, Garden, Building</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Sports, Sightseeing</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Cosmetics, Care</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Hobby, Film, Music, Books</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container-fluid mb-3">
	<div class="row">
		<div class="col-md-12 bg-light border-bottom pt-5 pb-5">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2>Laptops & Notebooks</h2>
						<ol class="breadcrumb p-0 m-0 bg-transparent">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item"><a href="#">Electronics, Computers</a></li>
							<li class="breadcrumb-item active">Laptops & Notebooks</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

        </div>
    )
}

export default AllCategoriesComponent
