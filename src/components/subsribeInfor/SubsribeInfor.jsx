

const SubsribeInfor = () => {
    return (
        <div className="bg-base-200 mb-4">
            <h2 className="text-center text-2xl font-normal">Subscribe to get information, latest news and other <br />
                interesting afters about new collections</h2>
            <div className="flex items-center md:mx-96 py-2">
                <div className="join">
                    <input
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered join-item" />
                    <button className="btn btn-primary join-item">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default SubsribeInfor;