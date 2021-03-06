import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
	state= {
		services: [
		{
			icon: <FaCocktail/>,
			title: "Free Cocktails",
			info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
		},
					{
			icon: <FaHiking/>,
			title: "Endless Hiking",
			info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
		},
					{
			icon: <FaShuttleVan/>,
			title: "Free Shuttle",
			info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
		},
					{
			icon: <FaBeer/>,
			title: "Strongest Beer",
			info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
		}
		]
	}
	render() {
		return (
			<section className= "services">
				<Title title="services" />
				<div className="services-center">
				{this.state.services.map((item,index) => {
						return (
							<article key= { index } className="service">
								<span>{ item.icon }</span>
								<h6>{ item.title }</h6>
								<p>{ item.info }</p>
							</article>
						);
					})}
				</div>
			</section>
	);
}
}