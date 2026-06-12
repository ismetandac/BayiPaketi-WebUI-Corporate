import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiGetContent, ApiGetMenuList } from '../services/MenuService';

export const GetMenuList = createAsyncThunk(
    'MenuList',
    async () => {
        const response = await ApiGetMenuList();
        return response.data.data;
    }
)

export const GetHomeData = createAsyncThunk(
    'HomeData',
    async () => {
        const response = await ApiGetContent('/');
        return response.data.data;
    }
)

export const GetContent = createAsyncThunk(
    'Content',
    async (pathname) => {
        const response = await ApiGetContent(pathname);
        return response.data.data;
    }
)



export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export const initialFilterData = {
    status: '',
}

const dataSlice = createSlice({
    name: 'Data',
    initialState: {
        loading: true,
        MenuList: [],
        HomePage: {},
        ContentPage: {},
        statisticData: {},
        tableData: initialTableData,
        filterData: initialFilterData,
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setLocationList: (state, action) => {
            state.LocationList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },

        setloading: (state, action) => {
            state.loading = action.payload
        },

    },
    extraReducers: {
        [GetMenuList.rejected]: (state, action) => { state.loading = false },
        [GetMenuList.pending]: (state, action) => { state.loading = true },
        [GetMenuList.fulfilled]: (state, action) => {
            state.MenuList = action.payload
            state.loading = false
        },
        [GetHomeData.rejected]: (state, action) => { state.loading = false },
        [GetHomeData.pending]: (state, action) => { state.loading = true },
        [GetHomeData.fulfilled]: (state, action) => {
            state.HomePage = action.payload
            state.loading = false
        },
        [GetContent.rejected]: (state, action) => { state.loading = false },
        [GetContent.pending]: (state, action) => { state.loading = true },
        [GetContent.fulfilled]: (state, action) => {
            state.ContentPage = action.payload
            state.loading = false
        },

    },
})

export const { setVehicleGroup, setFilterData, setloading } =
    dataSlice.actions

export default dataSlice.reducer
