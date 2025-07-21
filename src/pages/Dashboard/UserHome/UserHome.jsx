import useAuth from "../../../hooks/useAuth";

const UserHome = () => {

    const {user} = useAuth()
    return (
       <div>
            <h2 className="text-3xl font-bold text-center mt-6 uppercase">
                <span>Hi , Welcome </span>

                {
                    user?.displayName ? user?.displayName : 'Back'
                }
                 </h2>
        </div>
    );
};

export default UserHome;