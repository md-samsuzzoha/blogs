import axios from "axios";
import environment from "../../../../environment";
import useApi, { ApiResponse } from "../../../../hooks/useApi/useApi";
import GuardianData from "../../../../interfaces/Guardian.interface";


const fetcher = async (orderBy = 'newest'): Promise<GuardianData> => {
    const result = await axios.get<GuardianData>(
        `${environment.BASE_URL}/news`,
        {
            params: {
                'order-by': orderBy,
                'api-key': environment.API_KEY,
                'show-fields': 'trailText,main'
            }
        }
    );
    return result.data;
}
const useTopNewsFetching = (): ApiResponse<GuardianData, string> => {
    return useApi<GuardianData, string>((orderBy) => fetcher(orderBy));
}

export default useTopNewsFetching;