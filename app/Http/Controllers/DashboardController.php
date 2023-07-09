<?php

namespace App\Http\Controllers;

use App\Models\Resep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('dashboard/Index', [
            "reseps" => Resep::where('user_id', Auth::id())->orderBy('id', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('dashboard/Create', [
            'user' => Auth::user()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'user_id' => 'required',
            'judul' => 'required',
            'slug' => 'required|unique:reseps,slug',
            'deskripsi' => 'required',
            'bahan' => 'required',
            'langkah' => 'required',
            'image' => 'required',
            'like' => 'required',
        ]);

        $validate['image'] = $request->file('image')->store('images');

        $store = Resep::create($validate);
        if ($store) {
            return to_route('dashboard.index')->with('success', 'Resep Berhasil Ditambahkan!!');
        }else{
            return to_route('dashboard.create')->with('fail', 'Resep Gagal Ditambahkan!!');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Resep $resep)
    {
        return Inertia::render('dashboard/Edit', [
            'resep' => $resep
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Resep $resep)
    {
        return Inertia::render('dashboard/Edit', [
            'resep' => $resep
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Resep $resep)
    {
        $validate = Validator::make($request->all(), [
            'judul' => 'sometimes|required',
            'slug' => ['sometimes','required', Rule::unique('reseps')->where(fn ($query) => $query->where('slug', '!=' ,$request['slug']))],
            'deskripsi' => 'sometimes|required',
            'bahan' => 'sometimes|required',
            'langkah' => 'sometimes|required',
            'like' => 'sometimes|required',
        ]);
        // if ($validate->fails()) {
        //     return $validate->errors();
        // }
        $validate = $validate->validated();
        if ($request->file('image')) {
            $validate['image'] = $request->file('image')->store('images');
        }
        return $resep->update($validate) ? redirect()->route('dashboard.index')->with('success', 'Resep berhasil diupdate') : to_route('dashboard.edit')->with('fail', 'Resep gagal diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resep $resep)
    {
        return $resep->delete() ? redirect()->route('dashboard.index')->with('success', 'Resep berhasil dihapus!') : back()->with('fail', 'Resep gagal dihapus!');
    }
}
