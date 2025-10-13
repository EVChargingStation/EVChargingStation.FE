import React from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { increment, decrement, selectCount } from './store/slices/counterSlice';

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="p-6 rounded-xl bg-white shadow border w-full max-w-md text-center">
				<h1 className="text-2xl font-semibold mb-4">EV Charging Station FE</h1>
				<p className="text-gray-600 mb-6">React + Vite + TypeScript + Tailwind + Redux Toolkit</p>
				<div className="flex items-center justify-center gap-4">
					<button className="px-4 py-2 rounded bg-gray-200" onClick={() => dispatch(decrement())}>-</button>
					<span className="text-xl font-medium w-10 inline-block">{count}</span>
					<button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={() => dispatch(increment())}>+</button>
				</div>
			</div>
		</div>
	);
};

export default App;


