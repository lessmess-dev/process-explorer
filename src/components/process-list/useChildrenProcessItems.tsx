import React from "react";
import { $parentMap } from "../../processListStore";
import { useList } from "../../utils/useList";
import { ProcessItem } from "./ProcessItem";
import * as R from "ramda";

const parentLens = pid =>
	R.compose(
		R.defaultTo([]),
		R.view(R.lensPath([pid]))
	);

export const useChildrenProcessItems = pid => {
	const store = React.useRef($parentMap.map(parentLens(pid)));

	return useList(store.current, item => <ProcessItem pid={item} />);
};