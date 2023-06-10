import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCourse = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: course = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/myClasses?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });
  return [course, refetch];
};

export default useCourse;
