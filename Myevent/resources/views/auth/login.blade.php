<x-guest-layout>
    <x-authentication-card>
        
        <x-validation-errors class="mb-4" />
        @if (session('status'))
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ session('status') }}
        </div>
        @endif
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div>
                <x-label value="{{ __('Email') }}" />
                <x-input class="block mt-1 w-full" type="email" name="email" :value="old('email')" required
                    autofocus />
            </div>
            <div class="mt-4">
                <x-label value="{{ __('Password') }}" />
                <x-input class="block mt-1 w-full" type="password" name="password" required
                    autocomplete="current-password" />
            </div>
            <div class="block mt-4">
                <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" name="remember">
                    <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                </label>
            </div>
            <div class="flex items-center justify-end mt-4">
                @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
                @endif
                <x-button class="ml-4">
                    {{ __('Login') }}
                </x-button>
            </div>

            {{-- Login with GitHub --}}
            <div class="flex items-center justify-end mt-4">
                <a class="btn" href="{{ url('auth/github') }}"
                    style="background: #313131; color: #ffffff; padding: 10px; width: 100%; text-align: center; display: block; border-radius:3px;">
                    Login with GitHub
                </a>
            </div>
        </form>
    </x-authentication-card>
</x-guest-layout>