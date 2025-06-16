import { signIn } from "@/auth";

export default function SignIn() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google");
			}}
			className="flex justify-center items-center h-screen"
		>
			<button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
				Signin with Google
			</button>
		</form>
	);
}
