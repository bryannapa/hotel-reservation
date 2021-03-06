import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading'

function RoomContainer ({context}) {
	const { loading, sortedRooms, rooms } = context;
	if (loading) {
					return <Loading />;
				}
					return	(
						<React.Fragment>
							<RoomsFilter rooms= { rooms } />
							<RoomsList rooms = { sortedRooms } />
						</React.Fragment>
					);
}

export default withRoomConsumer(RoomContainer)

// export default function RoomsContainer () {
// 	return (
// 		<RoomConsumer>
// 			{value => {
// 				const { loading, sortedRooms, rooms } = value
// 				if (loading) {
// 					return <Loading />;
// 				}
// 					return	(
// 						<div>
// 							hello from roomscontainer
// 							<RoomsFilter rooms= { rooms } />
// 							<RoomsList rooms = { sortedRooms } />
// 						</div>
// 					);
// 				}}
// 		</RoomConsumer>
// 	);
// }