import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBookingClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    isLoading,
    data: myClasses = [],
    refetch,
  } = useQuery(["myClasses"], {
    queryFn: async () => {
      const res = await axiosSecure(`/myClasses?email=${user?.email}`);
      return res.data;
    },
  });
  return [myClasses, isLoading, refetch];
};

export default useBookingClass;
