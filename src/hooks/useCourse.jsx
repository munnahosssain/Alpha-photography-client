import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCourse = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("access-token");

  const { refetch, data: course = [] } = useQuery({
    queryKey: ["courses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myClasses?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [course, refetch];
};

export default useCourse;
